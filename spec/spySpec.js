describe("Testes do objeto Spy", () => {

    var Calculadora = {
        somar: (n1,n2) =>{
            return n1+n2;
        },
        subtrair: (n1,n2) =>{
            return n1-n2;
        }
    };

    beforeAll(()=>{
        spyOn(Calculadora, "somar").and.callThrough();
        spyOn(Calculadora, "subtrair");
    });
    
    it('Deve executar o método somar original', () => {
        expect(Calculadora.somar(1,1)).toEqual(2);
        expect(Calculadora.subtrair(2,1)).toBeUndefined();
    });

});