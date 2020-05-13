describe("Testes do objeto Spy", () => {

    var Calculadora = {
        somar: (n1,n2) =>{
            return n1+n2;
        }
    };

    beforeAll(()=>{
        spyOn(Calculadora, "somar");
    });

    it("Deve possuir o método somar como não definido", ()=>{
        expect(Calculadora.somar(1,1)).toBeUndefined();
    });

});