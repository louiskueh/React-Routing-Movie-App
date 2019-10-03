pipeline {
   agent {
        docker { image 'node:7-alpine' }
    }
  environment {
        HOME = '.'
    }
    
  tools {nodejs "node"}
    
  stages {
      
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     //
    // stage('Start frontend') {
    //   steps {
    //      sh 'npm start'
    //   }
    // }   
    //     stage('Start server') {
    //   steps {
    //     sh'cd Server'
    //      sh 'npm start'
    //   }
    // }   
      
    
  }
}