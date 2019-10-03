pipeline {

  environment {
        HOME = '.'
    }
    
  tools {nodejs "node"}
    
  stages {
      
    agent {
        docker { image 'node:12-alpine' }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     //
    agent {
        docker { image 'node:12-alpine' }
    }
    stage('Start frontend') {
      steps {
         sh 'npm start'
      }
    }   
    //     stage('Start server') {
    //   steps {
    //     sh'cd Server'
    //      sh 'npm start'
    //   }
    // }   
      
    
  }
}