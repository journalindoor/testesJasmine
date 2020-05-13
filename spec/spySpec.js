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
        spyOn(Calculadora, "somar").and.callFake();
       
    });

});