node {
    /*stage('Clean') { // <2>
        sh 'rm -rf tmp' // <3>
    }
      
    stage('Cloning') { // <2>
        sh 'pwd' // <3>
    }*/
    
    stage('Downloading dependencies') { // <2>
        sh 'npm install' // <3>
    }
    
    stage('Checkout Master') { // <2>
        sh 'git checkout main' // <3>
    }
    
    stage('Pull Master') { // <2>
        sh 'git pull' // <3>
    }
    
    stage('Checkout master'){
        sh 'git checkout master'
    }
    
    stage('Merge') {
        sh 'git merge main'
    }
    
    stage('Pusn to master') {
        sh 'git push'
    }
    
    wrap([$class: 'Xvfb']) {
        stage('Testing') {
            sh ' ng test --watch false'
        }
    }
    
    stage('Publish') {
        sh 'ng github-pages:deploy'
    }
}

/*node {
  wrap([$class: 'Xvfb']) {
    ... your steps here
  }
}*/
