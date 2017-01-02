var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var FoodList = require('FoodList');
var FoodItem = require('FoodItem')

describe('FoodList', () => {
  it('should exist', () => {
    expect(FoodList).toExist();
  });

  it('should render one component for one item', () => {
    var items = [
      {
        id:1,
        text: 'cabbage'
      },
      {
        id:2,
        text: 'banana'
      }
    ];
    var itemList = TestUtils.renderIntoDocument(<FoodList items={items}/>);
    var itemComponents = TestUtils.scryRenderedComponentsWithType(itemList, FoodItem);
    //this scry test is for React- it helps test component lengths? 

    expect(itemComponents.length).toBe(items.length);
  });


})
