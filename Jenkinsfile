pipeline {
      agent any

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
    //
  //     stage('Deliver') {
  //     steps {
  //         sh 'chmod 775 ./deliver.sh'
  //         sh './deliver.sh'
  //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
  //         sh 'chmod 775 ./kill.sh'
  //         sh './kill.sh'
  //         //

  //     }
  // }

      
    
  }
}