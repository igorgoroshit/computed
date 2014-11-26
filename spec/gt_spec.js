describe('Computed.gt', function(){
  beforeEach(function(){
    object = {
      hasTooManyBananas: Computed.gt('numBananas', 10)
    };
  });

  it('returns true when property is greater than value', function(){
    object.numBananas = 11;
    expect(object.hasTooManyBananas()).toBeTruthy();
  });

  it('returns false when property is equal to value', function(){
    object.numBananas = 10;
    expect(object.hasTooManyBananas()).toBeFalsy();
  });

  it('returns false when property is less than value', function(){
    object.numBananas = 9;
    expect(object.hasTooManyBananas()).toBeFalsy();
  });
});
