const { getRectanglePerimeter, getRectangleInfo, getRectangleArea  } = require( "../js/rectangle");

afterEach(() => {
    jest.restoreAllMocks();
  });
  
test('should properly calculate rectangle perimeter', ()=>{
    const outputPerimeter = getRectanglePerimeter(9,6);
    expect(outputPerimeter).toBe(30);
});

test('should properly calculate rectangle area', ()=>{
    const outputArea= getRectangleArea(9,6);
    expect(outputArea).toBe(54);
});

test('should properly return rectangle info', ()=>{
    const spy = jest.spyOn(console, 'log'); 
    getRectangleInfo(9,6);
    expect(spy).toHaveBeenCalledWith(`The perimeter of a rectangle is 30 and the area is 54`);
  });
