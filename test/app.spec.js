describe('Háromszög kerületszámítás', () => {
    it('30, 35 inputra 120 kerület', () => {
        let act = calcPerimeter(30,35);
        expect(act).toBe(120)
    })
   it('130,135 inputra 520 kerület', () => {
    let act = calcPerimeter(130,135);
        expect(act).toBe(520)
   });
   it('1,135 inputra 4 kerület', () => {
    let act = calcPerimeter(1,135);
        expect(act).toBe(4)
   });
    })
    describe('Háromszög területszámítás', () => {
        it('30,35 inputra 516.22', () => {
            let act = calcArea(30,35);
            expect(act).toBeCloseTo(516.22, 0.9)
        });
        it('130,135 inputra 11950.10', () => {
            let act = calcArea(130,135);
            expect(act).toBeCloseTo(11950.10, 0.9)
        });
        it('1,135 inputra 0.71', () => {
            let act = calcArea(1,135);
            expect(act).toBeCloseTo(0.71, 0.9)
        });
    });

