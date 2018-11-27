node 	{
	stage('Checkout') {
		checkout scm
	}
	stage('Build'){
		npm install
		ng build --progress false --prod --aot
	}
	stage('Test'){
			ng test --progress false ---watch false
		
	}
}
