/**
 * Created by elizabeth.venner on 16/05/2018.
 */

export class Teapot {

    constructor(
        private height,
        private girth,
        private handle,
        private spout
    ) {}

    isTeaReady(tea) {
        if (tea.checkTeaIsBrewed()) {
            return "TIP ME OVER AND POUR ME OUT!!";
        }
    }
}