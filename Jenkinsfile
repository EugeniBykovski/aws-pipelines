pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/EugeniBykovski/aws-pipelines', branch: 'master')
      }
    }
  }
}