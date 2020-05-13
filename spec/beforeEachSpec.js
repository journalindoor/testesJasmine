xdescribe("Teste do beforeEach",  () => {

    var contador = 0;

    beforeEach( () => {
        contador++;
    });

    it("Deve incrementar o contador para 1",  () => {
        expect(contador).toEqual(1);
    });

    it("Deve incrementar o contador para 2",  () => {
        expect(contador).toEqual(2);
    });

});