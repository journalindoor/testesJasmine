describe("Testes do objeto Spy", () => {

    var Calculadora = {
        somar: (n1,n2) =>{
            return n1+n2;
        }
    };

    beforeAll(()=>{
        spyOn(Calculadora, "somar");
    });

    it("Deve chamar o método somar ao menos uma vez", ()=>{
        Calculadora.somar(1,1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });

});