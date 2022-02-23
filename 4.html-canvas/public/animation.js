var animationFrameTime = 1000/5;

function startAnimation(){
	setInterval(renderAnimation, animationFrameTime);
}

function renderAnimation(){
	const d = animationFrameTime *0.002;
	const f = animationFrameTime *0.0001;

	roll += (Math.random() - 0.5)*d*0.5 - roll*f;
	pitch += (Math.random() - 0.5)*d- pitch*f;
	heading += (Math.random() - 0.5)*d - heading*f;

	renderVirtualHorizon();
}