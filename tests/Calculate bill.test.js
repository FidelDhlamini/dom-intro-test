describe('Calculate bill', function () {

    it('it should return the cost per call', function () {
        var instance = calculateBtnClicked();

        instance.bill("call")
        assert.equal(instance.total(), "2.75");
    });
    it('it should return the cost per sms', function () {
        var instance = calculateBtnClicked();
        instance.bill("sms")
        assert.equal(instance.total(), "0.75");
    });
    it('it should give the sms and bill total', function () {
        var instance = calculateBtnClicked();
        instance.bill("call,sms")
        assert.equal(instance.total(), 3.50);
    });
    it('it should return zero if you type the wrong characters', function () {
        var instance = calculateBtnClicked();
        instance.bill("ca")
        assert.equal(instance.total(), 0.00);
    });

});