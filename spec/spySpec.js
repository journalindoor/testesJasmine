describe("Testes do objeto Spy", () => {

    var Calculadora = {
        somar: (n1,n2) =>{
            return n1+n2;
        }
    };

    beforeAll(()=>{
        spyOn(Calculadora, "somar");
    });

    it("Deve chamar o método somar duas vezes", ()=>{
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });

});