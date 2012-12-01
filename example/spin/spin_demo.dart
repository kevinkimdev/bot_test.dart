import 'dart:html';
import 'dart:math' as math;
import 'package:bot/bot.dart';
import 'package:bot/html.dart';
import 'package:bot/retained.dart';

main(){
  CanvasElement canvas = document.query("#content");
  var demo = new SpinDemo(canvas);
  demo.requestFrame();
}

class SpinDemo{
  final CanvasElement _canvas;
  final Stage _stage;
  final AffineTransform _tx;
  Coordinate _mouseLocation;

  factory SpinDemo(CanvasElement canvas){

    final pCanvas = new CanvasThing(200, 200);
    final blue = new ShapeThing(100, 100, fillStyle: 'blue');
    final green = new ShapeThing(70, 70, fillStyle: 'green');
    final red = new ShapeThing(40, 40, fillStyle: 'red', shapeType: ShapeType.ellipse);

    pCanvas.add(blue);

    pCanvas.add(green);
    pCanvas.setTopLeft(green, new Coordinate(15, 15));

    pCanvas.add(red);
    pCanvas.setCenter(red, new Coordinate(50, 50));


    pCanvas.addTransform().translate(
      (canvas.width - pCanvas.width) / 2,
      (canvas.height - pCanvas.height) / 2);

    final tx = pCanvas.addTransform();

    final rootPanel = new CanvasThing(500, 500);
    rootPanel.add(pCanvas);

    final stage = new Stage(canvas, rootPanel);

    return new SpinDemo._internal(canvas, stage, tx);
  }

  SpinDemo._internal(this._canvas, this._stage, this._tx){
    _canvas.on.mouseMove.add(_canvas_mouseMove);
    _canvas.on.mouseOut.add(_canvas_mouseOut);
  }

  void requestFrame(){
    window.requestAnimationFrame(_onFrame);
  }

  void _onFrame(double highResTime){
    _tx.rotate(math.PI * 0.01, 100, 100);
    _stage.draw();
    if(_mouseLocation != null){
      RetainedDebug.borderHitTest(_stage, _mouseLocation);
    }
    requestFrame();
  }

  void _canvas_mouseMove(MouseEvent e){
    _mouseLocation = getMouseEventCoordinate(e);
  }

  void _canvas_mouseOut(MouseEvent e){
    _mouseLocation = null;
  }
}
