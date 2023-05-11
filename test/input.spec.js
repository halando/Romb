describe('Bemenet ellenőrzése', () => {
    it('30 inputként', () => {
        let act = checkInput(30);
        expect(act).toBe(true);
        
    });
});