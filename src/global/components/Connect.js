import { connect } from 'react-redux'

function connectExtended(mapStateToProps, mapDispatchToProps, mergeProps) {
  return connect(mapStateToProps, mapDispatchToProps, mergeProps)
}
export default connectExtended
