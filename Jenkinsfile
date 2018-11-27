node 	{
	stage('Checkout') {
		checkout scm
	}
	stage('Build'){
		npm install
		ng build --progress false --prod --aot
		tar -cvzf dist.tar.gz --strip-components=1 dist
	}
	stage('Test'){
			ng test --progress false ---watch false
		
	}
}
