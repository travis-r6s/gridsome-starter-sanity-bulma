module.exports = api => {
  api.createSchema(({ addSchemaTypes }) => {
    // Required to fix missing type bug
    addSchemaTypes(`
      type SanityDocument implements Node @infer {
        id: ID!
      }
    `)

    // Optional - add resolvers for singletons
    // addSchemaResolvers({
    //   Query: {
    //     sanityHeader: {
    //       type: 'SanityHeader',
    //       resolve (parent, args, ctx) {
    //         const headerCollection = ctx.store.getCollection('SanityHeader')
    //         if (!headerCollection) throw new Error('Missing SanityHeader collection')
    //         const [firstNode] = headerCollection.data()
    //         return firstNode
    //       }
    //     },
    //     sanityFooter: {
    //       type: 'SanityFooter',
    //       resolve (parent, args, ctx) {
    //         const footerCollection = ctx.store.getCollection('SanityFooter')
    //         if (!footerCollection) throw new Error('Missing SanityFooter collection')
    //         const [firstNode] = footerCollection.data()
    //         return firstNode
    //       }
    //     }
    //   }
    // })
  })
}
