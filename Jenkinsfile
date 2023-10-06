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
        echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
      }
    }
    stage('QA') {
      steps {
        echo "Test stage gets finished here"
      }
    }
    stage('Deploy to Stage') {
      steps {
        echo 'Testing..'
        echo "Build to Stage"
        when {
          expression {
            currentBuild.result == null || currentBuild.result == 'SUCCESS' 
          }
        }
        steps {
          sh 'make publish'
        }
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