module.exports = api => {
  api.createSchema(({ addSchemaTypes, addSchemaResolvers }) => {
    // Required to fix missing type bug
    addSchemaTypes(`
      type SanityDocument implements Node @infer {
        id: ID!
      }
    `)

    // Optional - add resolvers for singletons
    // const singletonTypes = ['SanityHeader', 'SanityFooter']
    // const singletonResolvers = Object.fromEntries(singletonTypes.map(type => {
    //   const name = type.split('').map((c, i) => i === 0 ? c.toLowerCase() : c).join('')
    //   const resolver = {
    //     type,
    //     resolve (parent, args, ctx) {
    //       const collection = ctx.store.getCollection(type)
    //       if (!collection) throw new Error(`Missing ${type} collection`)
    //       const [firstNode] = collection.data()
    //       return firstNode
    //     }
    //   }
    //   return [name, resolver]
    // }))
    // addSchemaResolvers({
    //   Query: { ...singletonResolvers }
    // })
  })
}
