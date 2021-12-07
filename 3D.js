

var canvas = document.getElementById("renderCanvas");

var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(255, 255, 255);
    
    //Adding a light
var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
	light.diffuse = new BABYLON.Color3(1, 1, 1);
	light.specular = new BABYLON.Color3(1, 1, 1);
	light.groundColor = new BABYLON.Color3(0.92, 0.92, 0.92);
	


    
    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    
    // The first parameter can be used to specify which mesh to import. Here we import all meshes
    BABYLON.SceneLoader.Append("https://raw.githubusercontent.com/penstina/3dViewer/main/", "CTR_003.obj", scene, function (newMeshes) {

        
       //mesh.scaling = new BABYLON.Vector3(0.5, 0.05, 0.05);  
        
        scene.activeCamera = null;
        scene.createDefaultCameraOrLight(true);
        scene.activeCamera.attachControl(canvas, false);
        
    });
    
    return scene;
}

var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
var scene = createScene();

engine.runRenderLoop(function () {
    if (scene) {
        scene.render();
    }
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});