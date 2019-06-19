describe('textBillTotal', function () {

    it('it should return the cost per call', function () {
        var instance = textBillTotal();

        instance.add('call')
        assert.equal(instance.call(), "2.75");
       
    });
    it('it should return the cost per sms', function () {
        var instance = textBillTotal();
        instance.add("sms")
        assert.equal(instance.sms(), "0.75");
    });

});