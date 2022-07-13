import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import DeployProcess from '../components/DeployProcess'
import Footer from '../components/Footer'
import Header from '../components/Header'

const App = ({actions, children}) => (
  <div>
    <Container text>
      <Header/>
      <h2>Demo Application</h2>
      <p>If this is the first time you are running this application, you might want to upload an example BPMN process.
      All you need to do is to upload the example BPMN file by clicking on the following button and choose the BPMN file in /examples/myprocess/myprocess.bpmn</p>
      <p>After uploading the process you should probably go to "Start Process" and choose the "My Process" Process.</p>
      <DeployProcess/>
    </Container>
    <Footer/>
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
