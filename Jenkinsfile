node {
  
    stage('Clean') {
        sh 'rm -rf tmp'
    }
    
    stage('Cloning') {
        sh 'git clone git@github.com:josecordaz/tmp.git'
    }

    stage('Downloading dependencies'){
        sh 'cd tmp && npm install'
    }

    stage('Checkout Master') {
        sh 'cd tmp && git checkout main'
    }
    
    stage('Pull Master') {
        sh 'cd tmp && git pull'
    }
    
    stage('Checkout master'){
        sh 'cd tmp && git checkout master'
    }
    
    stage('Merge') {
        sh 'cd tmp && git merge main'
    }
    
    stage('Pusn to master') {
        sh 'cd tmp && git push'
    }
    
    wrap([$class: 'Xvfb']) {
        stage('Testing') {
            sh 'cd tmp && ng test --watch false'
        }
    }
    
    stage('Publish') {
        sh 'cd tmp && ng serve --host 0.0.0.0 --watch false'
    }
}

/*node {
  wrap([$class: 'Xvfb']) {
    ... your steps here
  }
}*/
