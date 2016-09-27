$.getJSON("/timetables/semester1.json", function(json) {
    init(json);
});

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var data;
var moduleList = {};
var weekDates = [];
var currentWeek = 1;
var mobile = false;

function init(raw) {
    
    data = raw;
    
    //$("#loader").fadeOut();
    
    var startDate = new Date(raw.start);
    var endDate = new Date(raw.end);
    var weeks = Math.round((endDate - startDate) / 604800000);
    
    document.title = "Timetable: " + raw.semester.capitalizeFirstLetter() + " (" + startDate.getDate() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getYear() + " - " + endDate.getDate() + "/" + (endDate.getMonth() + 1) + "/" + endDate.getYear() + ")";
    
    for (var m in data.modules) {
        if (data.modules.hasOwnProperty(m)) {
            moduleList[data.modules[m].code] = m;
        }
    }
    
    for (var i = 0; i < weeks; i++) {
        var start = new Date();
        var end = new Date();
        start.setDate(startDate.getDate()+(7 * i));
        end.setDate(startDate.getDate() + 4 + (7 * i));
        weekDates[i] = [start, end]; 
    }
    
    setCurrentWeek(currentWeek);
}

function initMobile() {
    $(".menutoggle__container").remove();
    $(".sidebar").remove();
    $(".timetable__table").hide();
}

function setCurrentWeek(week) {
    
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    currentWeek = week;
    var lessons = getWeek(week);
    setTimetable(lessons);
    
    $($(".timetable__table")[0].rows[0].cells[0]).text("Week " + week);
    
    if (week !== 1) {
        if (weekDates[week-2][0].getMonth() == weekDates[week-2][1].getMonth()) {
            $(".weekSelector--previous").text(weekDates[week-2][0].getDate() + " - " + weekDates[week-2][1].getDate() + " " + months[weekDates[week-2][0].getMonth()]);
        } else {
            $(".weekSelector--previous").text(weekDates[week-2][0].getDate() + " " + months[weekDates[week-2][0].getMonth()] + " - " + weekDates[week-2][1].getDate() + " " + months[weekDates[week-2][1].getMonth()]);
        }
    } else {
        $(".weekSelector--previous").text("");
    }
    
    var text = "";
    if (weekDates[week-1][0].getMonth() == weekDates[week-1][1].getMonth()) {
        text = weekDates[week-1][0].getDate() + " - " + weekDates[week-1][1].getDate() + " " + months[weekDates[week-1][0].getMonth()]
        
    } else {
        text = weekDates[week-1][0].getDate() + " " + months[weekDates[week-1][0].getMonth()] + " - " + weekDates[week-1][1].getDate() + " " + months[weekDates[week-1][1].getMonth()];
    }
    $(".weekSelector--current").text(text);
    $(".weekDropdown span").text(text);
    
    if (week !== weekDates.length) {
        if (weekDates[week][0].getMonth() == weekDates[week][1].getMonth()) {
            $(".weekSelector--next").text(weekDates[week][0].getDate() + " - " + weekDates[week][1].getDate() + " " + months[weekDates[week][0].getMonth()]);
        } else {
            $(".weekSelector--next").text(weekDates[week][0].getDate() + " " + months[weekDates[week][0].getMonth()] + " - " + weekDates[week][1].getDate() + " " + months[weekDates[week][1].getMonth()]);
        }
    } else {
        $(".weekSelector--next").text("");
    }
    
    $("#weekchooser").html("");
    
    for (var i = 0; i < weekDates.length; i++) {
        var dates = "";
        if (weekDates[i][0].getMonth() == weekDates[i][1].getMonth()) {
            dates = weekDates[i][0].getDate() + " - " + weekDates[i][1].getDate() + " " + months[weekDates[i][0].getMonth()]

        } else {
            dates = weekDates[i][0].getDate() + " " + months[weekDates[i][0].getMonth()] + " - " + weekDates[i][1].getDate() + " " + months[weekDates[i][1].getMonth()];
        }
        $("#weekchooser").append("<li>" + dates + "</li>");
    }
    
    $("#weekchooser li").on("click", function() {
        var index = $(this).parent().children().index($(this));
        setCurrentWeek(index + 1);
    });
}

function getWeek(week) {
    
    var lessons = [];
    
    for (var module in data.modules) {
        if (data.modules.hasOwnProperty(module)) {
            var m = data.modules[module];
            var code = m.code;
            
            for (var i = 0; i < m.sessions.length; i++) {
                var s = m.sessions[i];
                if ($.inArray(week, s.weeks) !== -1) {
                    lessons.push(code + "::" + m.teacher + "::" + s.room + "::" + s.type + "::" + s.day + "::" + s.start + "::" + s.end);
                }
            }
        }
    }
    
    return lessons;
}

function setTimetable(lessons) {
    var table = $(".timetable__table")[0];
    
    clearTable(table);
    
    for (var i = 0; i < lessons.length; i++) {
        var info = lessons[i].split("::");
        var duration = (info[6] - info[5]) / 100;
        
        var $cell = $(table.rows[info[5] / 100 - 8].cells[info[4]]);
        $cell.html("<p class='title'>" + info[0] + " - " + info[3] + "</p><p class='info'>" + parseName(info[1]) + ", " + info[2] + "</p>");
        
        if (duration > 1) {
            for (var j = 1; j <= duration; j++) {
                $cell = $(table.rows[(info[5] / 100 - 9) + j].cells[info[4]]);
                if (j == 1) {
                    $cell.addClass("connected-top");
                } else if (j == duration) {
                    $cell.addClass("connected-bottom");
                } else if (j < duration) {
                    $cell.addClass("connected-middle");
                }
            }
        }
    }
}

function clearTable(table) {
    for (var i = 1; i < table.rows.length; i++) {
        for (var j = 1; j < table.rows[i].cells.length; j++) {
            $cell = $(table.rows[i].cells[j]);
            $cell.removeClass("connected-top");
            $cell.removeClass("connected-middle");
            $cell.removeClass("connected-bottom");
            $cell.removeClass("selected");
            $cell.html("");
        }
    }
}

function parseName(name) {
    var n = name.split(" ")
    var res = "";
    if ($.inArray(n[0], ["Mr", "Dr", "Prof", "Professor", "Doctor", "Mrs", "Ms", "Miss", "Mister"]) !== -1) {
        res = n[1].substring(0, 1) + ". " + n[2];
    } else {
        res = n[0].substring(0, 1) + ". " + n[1];
    }
    return res;
}

$(document).ready(function() {
    
    mobile = window.innerWidth <= 720;
    
    if (mobile) {
        initMobile();
    }
    
    $(".timetable__table td").click(function() {
        var table = $(this).parent().parent()[0];
        var done = false;
        if ($(this).hasClass("selected"))
            done = true;
        
        for (var i = 1; i < table.rows.length; i++) {
            for (var j = 1; j < table.rows[i].cells.length; j++) {
                $cell = $(table.rows[i].cells[j]);
                $cell.removeClass("selected");
            }
        }
        
        if (done)
            return;
        
        var i = $(this).parent().children().index($(this));
        var j = $(this).parent().parent().children().index($(this).parent());
        
        $(this).addClass("selected");
        
        if ($(this).hasClass("connected-top")) {
            while (!$(table.rows[j].cells[i]).hasClass("connected-bottom")) {
                j++;
                if (j > table.rows[j].length) {
                    break;
                }
                $(table.rows[j].cells[i]).addClass("selected");
            }
        }
        if ($(this).hasClass("connected-bottom")) {
            while (!$(table.rows[j].cells[i]).hasClass("connected-top")) {
                j--;
                if (j < 1) {
                    break;
                }
                $(table.rows[j].cells[i]).addClass("selected");
            }
        }
        if ($(this).hasClass("connected-middle")) {
            var jinit = j;
            while (!$(table.rows[j].cells[i]).hasClass("connected-bottom")) {
                j++;
                if (j > table.rows[j].length) {
                    break;
                }
                $(table.rows[j].cells[i]).addClass("selected");
            }
            j = jinit;
            while (!$(table.rows[j].cells[i]).hasClass("connected-top")) {
                j--;
                if (j < 1) {
                    break;
                }
                $(table.rows[j].cells[i]).addClass("selected");
            }
        }
        
    });
    
    $(".weekSelector span").click(function() {
        if ($(this).hasClass("weekSelector--previous")) {
            setCurrentWeek(currentWeek - 1);
        } else if ($(this).hasClass("weekSelector--next")) {
            setCurrentWeek(currentWeek + 1);
        }
    });
    
    $(".weekDropdown").click(function() {
        $("#weekchooser").toggleClass("open");
        $(".weekDropdown i").toggleClass("open");
    });
    
    $(document).mouseup(function(e) {
        var el = $(".weekDropdown");
        if (!el.is(e.target) && el.has(e.target).length === 0) {
            $("#weekchooser").removeClass("open");
        }
    });
});