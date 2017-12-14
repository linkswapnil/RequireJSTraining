define(['mylibrary'], function(myLibrary){

  describe("mylibrary", function(){
    describe("sayHello()", function(){
      it("should say Hello", function(){
        expect(myLibrary.sayHello()).toEqual("Hello");
      })
    })
  })

})