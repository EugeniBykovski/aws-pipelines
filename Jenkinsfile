pipeline {
  agent any
  stages {
    stage('Check') {
      steps {
        git(url: 'https://github.com/EugeniBykovski/aws-pipelines', branch: 'master')
      }
    }
    stage('Build') {
      steps {
        echo "Running build project"
      }
    }
    stage('QA') {
      steps {
        echo "Test stage gets finished here"
      }
    }
    stage('Deploy to Stage') {
      steps {
        echo 'Deploying....'
        echo "Build to Stage"
      }
    }
    stage('Deploy to Prod') {
      steps {
        echo 'Deploying....'
        echo "Build to Prod"
      }
    }
  }
}