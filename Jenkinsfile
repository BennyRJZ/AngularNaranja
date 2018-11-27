node 	{
	stage('Checkout') {
		checkout scm
	}
	stage('Build'){
		sh 'ng build --progress false --prod --aot'
		sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
		
		archive 'dist.tar.gz'
	}
	stage('Test'){
			sh 'ng test --progress false ---watch false'
		
	}
}
