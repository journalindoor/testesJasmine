describe("Teste do toContain", () => {
    it("Deve demonstrar o uso do toContain", () => {

        var texto = "Meu nome é Rony";
        var frutas = ["uva", "morango", "cerveja"];

        expect(texto).toContain("Rony");
        expect(texto).not.toContain("rony");

        expect(frutas).toContain("cerveja");
        expect(frutas).not.toContain("banana");

    });
});