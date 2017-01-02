var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var PersonalControls = require('PersonalControls');

describe('PersonalControls', () => {
  it('should exist', () => {
    expect(PersonalControls).toExist();
  });



  it(' checks our personal controls. It should call a new food item prop if valid food item is entered', () => {
    var spy = expect.createSpy();
    var addNewFood = TestUtils.renderIntoDocument(<PersonalControls onAddItem={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addNewFood));

    addNewFood.refs.EditItems.value="eggplant";
    TestUtils.Simulate.submit($el.find('form')[0]); //must have index 0 bc the jquery selector is just the form, not the value
    expect(spy).toHaveBeenCalledWith('eggplant');
  });
})
