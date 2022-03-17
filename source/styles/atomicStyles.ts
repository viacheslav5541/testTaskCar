import { StyleSheet } from 'react-native'

export const atomicStyles = StyleSheet.create({
    flexOne: {
        flex: 1
    },

    flexRow: {
        flexDirection: 'row'
    },

    flexColumn: {
        flexDirection: 'column'
    },

    flexOneRow: {
        flex: 1,
        flexDirection: 'row'
    },

    flexOneColumn: {
        flex: 1,
        flexDirection: 'column'
    },

    flexCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    flexOneCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    wrap: {
        flexWrap: 'wrap'
    },

    noWrap: {
        flexWrap: 'nowrap'
    },

    justifyContentStart: {
        justifyContent: 'flex-start'
    },

    justifyContentEnd: {
        justifyContent: 'flex-end'
    },

    justifyContentCenter: {
        justifyContent: 'center'
    },

    justifyContentAround: {
        justifyContent: 'space-around'
    },

    justifyContentBetween: {
        justifyContent: 'space-between'
    },

    justifyContentEvenly: {
        justifyContent: 'space-evenly'
    },

    alignItemsStart: {
        alignItems: 'flex-start'
    },

    alignItemsEnd: {
        alignItems: 'flex-end'
    },

    alignItemsCenter: {
        alignItems: 'center'
    },

    alignSelfStart: {
        alignSelf: 'flex-start'
    },

    alignSelfEnd: {
        alignSelf: 'flex-end'
    },

    alignSelfCenter: {
        alignSelf: 'center'
    },

    textAlignCenter: {
        textAlign: 'center'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlignRight: {
        textAlign: 'right'
    },
    textAlignJustify: {
        textAlign: 'justify'
    },

    fullWidth: {
        width: '100%'
    },

    borderOne: {
        borderWidth: 1
    },
    borderTopOne: {
        borderTopWidth: 1
    },
    borderBottomOne: {
        borderBottomWidth: 1
    },
    borderLeftOne: {
        borderLeftWidth: 1
    },
    borderRightOne: {
        borderRightWidth: 1
    },
    borderVerticalOne: {
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    borderHorizontalOne: {
        borderLeftWidth: 1,
        borderRightWidth: 1
    },

    marginTop_5: {
        marginTop: 5
    },
    marginTop_10: {
        marginTop: 10
    },
    marginTop_15: {
        marginTop: 15
    },
    marginTop_20: {
        marginTop: 20
    },
    marginTop_30: {
        marginTop: 30
    },
    marginTop_40: {
        marginTop: 40
    },

    marginBottom_5: {
        marginBottom: 5
    },
    marginBottom_10: {
        marginBottom: 10
    },
    marginBottom_15: {
        marginBottom: 15
    },
    marginBottom_20: {
        marginBottom: 20
    },
    marginBottom_30: {
        marginBottom: 30
    },
    marginBottom_50: {
        marginBottom: 50
    },

    marginLeft_5: {
        marginLeft: 5
    },
    marginLeft_10: {
        marginLeft: 10
    },
    marginLeft_15: {
        marginLeft: 15
    },
    marginLeft_20: {
        marginLeft: 20
    },
    marginLeft_30: {
        marginLeft: 30
    },

    marginRight_5: {
        marginRight: 5
    },
    marginRight_10: {
        marginRight: 10
    },
    marginRight_15: {
        marginRight: 15
    },
    marginRight_20: {
        marginRight: 20
    },
    marginRight_30: {
        marginRight: 30
    },

    marginVertical_5: {
        marginVertical: 5
    },
    marginVertical_10: {
        marginVertical: 10
    },
    marginVertical_15: {
        marginVertical: 15
    },
    marginVertical_20: {
        marginVertical: 20
    },

    marginHorizontal_5: {
        marginHorizontal: 5
    },
    marginHorizontal_10: {
        marginHorizontal: 10
    },
    marginHorizontal_15: {
        marginHorizontal: 15
    },
    marginHorizontal_20: {
        marginHorizontal: 20
    },

    screenPadding: {
        paddingBottom: 20,
        paddingHorizontal: 20
    },

    screenPaddingY: {
        paddingVertical: 20
    },

    screenPaddingX: {
        paddingHorizontal: 20
    },

    screenPaddingBottom: {
        paddingBottom: 20
    },

    halfItemsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    halfItemLeft: {
        flex: 1,
        maxWidth: '50%',
        marginRight: 10
    },
    halfItemRight: {
        flex: 1,
        maxWidth: '50%',
        marginLeft: 10
    },

    thirdItemLeft: {
        flex: 1,
        maxWidth: '33%',
        marginRight: 10,
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    thirdItemCenter: {
        flex: 1,
        maxWidth: '33%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    thirdItemRight: {
        flex: 1,
        maxWidth: '33%',
        marginLeft: 10,
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    rightHalfItemWrap: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        maxWidth: '50%',
        paddingLeft: 10
    }
})