/**
 * Created by elizabeth.venner on 11/05/2018.
 */
import * as chai from 'chai';

const expect = chai.expect;

import {Teapot, Handle, Spout, Tea, Height, Girth} from '../../main/teapot';

describe ('Teapot', () => {

    const height = new Height(20);
    const girth = new Girth(20);
    const handle = new Handle('curly');
    const spout = new Spout('non-drip');
    const myTeapot = new Teapot(height, girth, handle, spout);
    const tea = new Tea();

    it('shouts when tea is ready', () => {
        tea.makeTea();
        expect(myTeapot.isTeaReady(tea)).to.equal("TIP ME OVER AND POUR ME OUT!!");
    });

});

describe('Tea', () => {

    const tea = new Tea();

    it('starts with tea not ready', () => {
        expect(tea.checkTeaIsBrewed()).to.equal(false);
    });

    it('makes the tea', () => {
        expect(tea.makeTea()).to.equal(true);
    });

    it('returns true when tea is ready', () => {
        tea.makeTea();
        expect(tea.checkTeaIsBrewed()).to.equal(true);
    });

});

describe('Height', () => {

    it('is short if under 20', () => {
        const height = new Height(15);
        expect(height.checkIfShort()).to.equal(true);
    });

    it('is not short if over 20', () => {
        const height = new Height(21);
        expect(height.checkIfShort()).to.equal(false);
    });

});

describe('Girth', () => {

    it('is stout if under 20', () => {
        const girth = new Girth(15);
        expect(girth.checkIfStout()).to.equal(true);
    });

    it('is not stout if over 20', () => {
        const girth = new Girth(21);
        expect(girth.checkIfStout()).to.equal(false);
    });
});
