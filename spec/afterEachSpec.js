describe("Teste do afterEach",  () => {

    var contador = 0;

    beforeEach(()=>{
        contador++;
    });

    afterEach(()=>{
        contador = 0;
    });

    it("Deve garantir o valor 1 para o contador",  () => {
        expect(contador).toEqual(1);
    });

    it("Deve ainda garantir o contador com o valor 1",  () => {
        expect(contador).toEqual(1);
    });

});