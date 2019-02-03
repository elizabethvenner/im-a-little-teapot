/**
 * Created by elizabeth.venner on 11/05/2018.
 */

export class Teapot {

    constructor(
        private height: Height,
        private girth: Girth,
        private handle: Handle,
        private spout: Spout
    ) {}

    isTeaReady(tea: Tea): string {
        if (tea.checkTeaIsBrewed()) {
            return "TIP ME OVER AND POUR ME OUT!!";
        }
    }
}

export class Height {

    private MAX_SHORTNESS: number = 20;

    constructor(
        private dimension: number
    ) {}

    checkIfShort(): boolean {
        if (this.dimension > this.MAX_SHORTNESS) return false;
        return true
    }
}

export class Girth {

    private MAX_STOUTNESS: number = 20;

    constructor(
        private dimension: number
    ){}

    checkIfStout(): boolean {
        if (this.dimension > this.MAX_STOUTNESS) return false;
        return true;
    }

}

export class Handle {

    constructor(
        private variety: string
    ) {}

}

export class Spout {

    constructor(
        private variety: string
    ) {}
}

export class Tea {

    private isReady = false;

    checkTeaIsBrewed(): boolean {
        return this.isReady;
    }

    makeTea(): boolean {
        this.isReady = true;
        return this.isReady;
    }



}