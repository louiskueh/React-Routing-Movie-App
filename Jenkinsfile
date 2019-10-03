pipeline {
      agent {
        docker { image 'node:12-alpine' }
        args '-p 3000:3000' 
    }

  environment {
        HOME = '.'
    }
    
  tools {nodejs "node"}
    
  stages {
      
  
    stage('Install dependencies') {
    agent {
        docker { image 'node:12-alpine' }
    }
      steps {
        sh 'npm install'
      }
    }
     //

    stage('Start frontend') {
    agent {
        docker { image 'node:12-alpine' }
    }
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