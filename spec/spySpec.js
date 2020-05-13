describe("Testes do objeto Spy", () => {

    var Calculadora = {
        somar: (n1,n2) =>{
            return n1+n2;
        }
    };

    beforeAll(()=>{
        spyOn(Calculadora, "somar");
    });

    it("Deve chamar o método somar com os parâmetros válidos", ()=>{
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(Calculadora.somar).toHaveBeenCalledWith(2,2);
    });

});