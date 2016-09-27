<?php require_once("template/header.php"); ?>

        <main class="timetable">
            <section class="timetable__selector">
                <span class="weekDropdown__prompt">Choose a week</span>
                <a href="#" class="weekDropdown dropdown" data-activates="weekchooser">
                    <span>26 - 30 Sep</span><i class="fa fa-chevron-down"></i>
                </a>
                <ul id="weekchooser">
                    
                </ul>
                <div class="weekSelector">
                    <span class="weekSelector--previous"></span>
                    <span class="weekSelector--current"></span>
                    <span class="weekSelector--next"></span>
                </div>
            </section>
            <table class="timetable__table">
                <tr>
                    <th></th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
                <tr>
                    <th>9:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>10:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>11:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>12:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>13:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>14:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>15:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>16:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>17:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <section class="timetable__mobile">
                <ul class="timetable__tabs">
                    <li class="selected">Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                </ul>
                <ul class="timetable__schedule">
                    <li>
                        <aside>
                            <span>09:00</span>
                            <span>11:00</span>
                        </aside>
                        <article>
                            <span class="title">EE2E1 - Lecture</span>
                            <span class="info">M. Spann, Gkap NG16</span>
                        </article>
                    </li>
                    <li>
                        <aside>
                            <span>09:00</span>
                            <span>11:00</span>
                        </aside>
                        <article>
                            <span class="title">EE2E1 - Lecture</span>
                            <span class="info">M. Spann, Gkap NG16</span>
                        </article>
                    </li>
                    <li>
                        <aside>
                            <span>09:00</span>
                            <span>11:00</span>
                        </aside>
                        <article>
                            <span class="title">EE2E1 - Lecture</span>
                            <span class="info">M. Spann, Gkap NG16</span>
                        </article>
                    </li>
                    <li>
                        <aside>
                            <span>09:00</span>
                            <span>11:00</span>
                        </aside>
                        <article>
                            <span class="title">EE2E1 - Lecture</span>
                            <span class="info">M. Spann, Gkap NG16</span>
                        </article>
                    </li>
                </ul>
            </section>
        </main>
        
        <script src="/script/main.js"></script>

<?php require_once("template/footer.php"); ?>