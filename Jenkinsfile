pipeline {
    agent {
        docker { image "node:22" }
    }

    environment {
        HOME = '.'
    }

    stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }

        stage("Deploy") {
            steps([$class: "BapSshPromotionPublisherPlugin"]) {
                sshPublisher(
                    continueOnError: false, failOnError: true,
                    publishers: [
                        sshPublisherDesc(
                            configName: "website",
                            verbose: true,
                            transfers: [
                                sshTransfer(sourceFiles: "dist/**", remoteDirectory: "www", removePrefix: "dist", cleanRemote: true)
                            ]
                        )
                    ]
                )
            }
        }
    }
}

