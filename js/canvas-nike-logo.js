var SVGIcons = {
  "nike.svg": {
    draw: function (ctx) {
      ctx.save();

      // Scale the drawing
      const scaleX = 0.15; // Scale width to 80%
      const scaleY = 0.15; // Scale height to 80%
      ctx.scale(scaleX, scaleY);
      


      /*border*/
      /*ctx.strokeStyle = "black";
      ctx.lineWidth = 1; */
      /*ctx.strokeRect(-135.50, -361.38, 1400, 1200); // x, y, width, height*/
      /*ctx.strokeRect(0, -840, 1000, 1200); // x, y, width, height*/

      ctx.fillStyle = "#ffffff"; 

      ctx.strokeStyle = "rgba(0,0,0,0)";
      ctx.miterLimit = 4;
      ctx.font = "15px ''";
      ctx.font = "   15px ''";
      ctx.scale(1, 1);
      ctx.translate(50, -361.38);
      ctx.save();
      ctx.font = "   15px ''";
      ctx.beginPath();
      ctx.moveTo(245.8075, 717.62406);
      ctx.bezierCurveTo(
        216.01162,
        716.4403599999999,
        191.6341,
        708.28726,
        172.57291,
        693.14446
      );
      ctx.bezierCurveTo(
        168.93516,
        690.25166,
        160.26680000000002,
        681.57816,
        157.35864,
        677.91996
      );
      ctx.bezierCurveTo(
        149.62906,
        668.20066,
        144.37397,
        658.74146,
        140.86887000000002,
        648.2465599999999
      );
      ctx.bezierCurveTo(
        130.08317000000002,
        615.9404599999999,
        135.63418000000001,
        573.54766,
        156.74640000000002,
        527.02226
      );
      ctx.bezierCurveTo(
        174.82290000000003,
        487.19066,
        202.71572000000003,
        447.68566,
        251.37892000000002,
        392.97146
      );
      ctx.bezierCurveTo(
        258.54728,
        384.92035999999996,
        279.89418,
        361.37456,
        280.03194,
        361.37456
      );
      ctx.bezierCurveTo(
        280.08294,
        361.37456,
        278.91969,
        363.38986,
        277.45542,
        365.84396
      );
      ctx.bezierCurveTo(
        264.80238,
        387.03776,
        253.97585,
        412.00196,
        248.07791,
        433.61426
      );
      ctx.bezierCurveTo(
        238.60343,
        468.29276,
        239.74628,
        498.05296,
        251.42484,
        521.12936
      );
      ctx.bezierCurveTo(
        259.48095,
        537.02736,
        273.29215,
        550.79776,
        288.82274,
        558.4099600000001
      );
      ctx.bezierCurveTo(
        316.01148,
        571.7313600000001,
        355.81754,
        572.8334600000001,
        404.42973,
        561.6344600000001
      );
      ctx.bezierCurveTo(
        407.77667,
        560.8589600000001,
        573.62336,
        516.8334600000001,
        772.9802099999999,
        463.7978600000001
      );
      ctx.bezierCurveTo(
        972.3370699999999,
        410.75706000000014,
        1135.4746,
        367.39496000000014,
        1135.5001,
        367.4306600000001
      );
      ctx.bezierCurveTo(
        1135.5561,
        367.4766600000001,
        672.33751,
        565.6905600000001,
        431.87356,
        668.5220600000001
      );
      ctx.bezierCurveTo(
        393.79197999999997,
        684.8026600000002,
        383.60835,
        688.9148600000001,
        365.70529,
        695.2005600000001
      );
      ctx.bezierCurveTo(
        319.94004,
        711.2719600000001,
        278.94521,
        718.94036,
        245.8075,
        717.6240600000001
      );
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      ctx.restore();

    },
  },
};

// Inicializacija Canvas in risanje logotipa
window.onload = function () {
  const canvas = document.getElementById("nikeCanvas");
  const ctx = canvas.getContext("2d");

  // Risanje Nike na Canvas
  if (SVGIcons["nike.svg"]) {
    SVGIcons["nike.svg"].draw(ctx);
  }
};