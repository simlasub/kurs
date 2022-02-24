var depthSize = [80,vhSize[1]];


// intitializes the depth gauge
function initializeDepth(){
	dep.strokeStyle = colors[0];
	dep.fillStyle = colors[0];
	dep.lineWidth = lineWidth;
	dep.font = font;

	depthSize = [80, vhSize[1]]
}

function renderDepth(){
	// constants
	const offset = [ vhOffset[0]+vhSize[0], vhOffset[1] ];
	const framed = false;
	const vSpeedScale = depthSize[1]/1;
	const vSpeedScaleLength = 8;
	const vSpeedIndicator = 15;
	const depthScale = depthSize[1]/8;
	const depthScaleLength = 20;

	// clear Old Frame
	dep.clearRect(0, 0, dim[0], dim[1]);

	// draw line
	dep.beginPath();
	dep.moveTo(offset[0], offset[1]);
	dep.lineTo(offset[0], offset[1]+depthSize[1]);
	if(framed){	dep.rect(offset[0],offset[1],depthSize[0],depthSize[1]);}
	dep.stroke();

	// draw vSpeed scale
	// small strokes
	var i = 0;
	while(i*vSpeedScale <= depthSize[1]/2){
		dep.beginPath();
		dep.moveTo(offset[0], offset[1] + depthSize[1]/2 + i*vSpeedScale);
		dep.lineTo(offset[0]-vSpeedScaleLength, offset[1] + depthSize[1]/2 + i*vSpeedScale);
		dep.stroke();
		dep.beginPath();
		dep.moveTo(offset[0], offset[1] + depthSize[1]/2 - i*vSpeedScale);
		dep.lineTo(offset[0]-vSpeedScaleLength, offset[1] + depthSize[1]/2 - i*vSpeedScale);
		dep.stroke();
		i += 0.1;
	}
	// main Strokes
	var i = 0;
	while(i*vSpeedScale <= depthSize[1]/2){
		dep.beginPath();
		dep.moveTo(offset[0], offset[1] + depthSize[1]/2 + i*vSpeedScale);
		dep.lineTo(offset[0]-vSpeedIndicator, offset[1] + depthSize[1]/2 + i*vSpeedScale);
		dep.stroke();
		dep.beginPath();
		dep.moveTo(offset[0], offset[1] + depthSize[1]/2 - i*vSpeedScale);
		dep.lineTo(offset[0]-vSpeedIndicator, offset[1] + depthSize[1]/2 - i*vSpeedScale);
		dep.stroke();
		i += 0.5
	}
	// draw vSpeed Indicator
	dep.beginPath();
	dep.moveTo(offset[0], offset[1] + depthSize[1]/2 + vSpeed*vSpeedScale);
	dep.lineTo(offset[0]-vSpeedIndicator, offset[1] + depthSize[1]/2 + vSpeed*vSpeedScale+vSpeedIndicator);
	dep.lineTo(offset[0]-vSpeedIndicator, offset[1] + depthSize[1]/2 + vSpeed*vSpeedScale-vSpeedIndicator);
	dep.fill();
	// draw vSpeed Text
	dep.textAlign = "right";
	dep.fillText(vSpeed.toFixed(2), offset[0]+depthSize[0], offset[1] -6, depthSize[0]);

	// depth Lines
	var i = depth%1;
	while(i*depthScale < depthSize[1]/2){
		if(depth-i > 0){
			dep.beginPath();
			dep.moveTo(offset[0], offset[1] + depthSize[1]/2 - i*depthScale);
			dep.lineTo(offset[0]+depthScaleLength, offset[1] + depthSize[1]/2 - i*depthScale);
			dep.stroke();	
			dep.textAlign = "left";
			dep.fillText((depth-i).toFixed(0), offset[0]+depthScaleLength, offset[1] + depthSize[1]/2 - i*depthScale+7,  depthSize[0]-depthScaleLength);
		} else if(depth-i == 0){
			dep.rect(offset[0], offset[1] + depthSize[1]/2 - i*depthScale, depthSize[0], i*depthScale -depthSize[1]/2 );
			dep.fill();
		}
		i += 1;
	}
	var i = depth%1-1;
	while(i*depthScale > -depthSize[1]/2){
		if(depth-i > 0){
			dep.beginPath();
			dep.moveTo(offset[0], offset[1] + depthSize[1]/2 - i*depthScale);
			dep.lineTo(offset[0]+depthScaleLength, offset[1] + depthSize[1]/2 - i*depthScale);
			dep.stroke();	
			dep.textAlign = "left";
			dep.fillText((depth-i).toFixed(0), offset[0]+depthScaleLength, offset[1] + depthSize[1]/2 - i*depthScale+7,  depthSize[0]-depthScaleLength);
		} else if(depth-i == 0){
			dep.rect(offset[0], offset[1] + depthSize[1]/2 - i*depthScale, depthSize[0], i*depthScale -depthSize[1]/2 );
			dep.fill();
		}
		i = i-1;
	}

	// draw depth number
	dep.clearRect(offset[0], offset[1] + depthSize[1]/2 - fontSize/2-4, depthSize[0], fontSize+4);
	dep.textAlign = "right";
	dep.fillText(depth.toFixed(1), offset[0]+depthSize[0], offset[1] + depthSize[1]/2 + fontSize/2-6, depthSize[0]);
	dep.rect(offset[0], offset[1] + depthSize[1]/2 - fontSize/2-4, depthSize[0], fontSize+4);
	dep.stroke();
}