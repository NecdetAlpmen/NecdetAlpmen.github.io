import { beers } from '@/data/beers'

export default function BeersSection() {
  return (
    <section id="beers" className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Top 10 Beers
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Add a sentence or two here about why you like beer. This could be about the craft, the variety, 
            the community, or simply the enjoyment of trying new flavors and styles.
          </p>
        </div>

        <ol className="space-y-4">
          {beers.map((beer, index) => (
            <li key={beer.id} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary-600 text-white rounded-full font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-grow">
                <div className="flex items-start gap-3">
                  {beer.imageUrl && (
                    <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                      <img
                        src={beer.imageUrl}
                        alt={`${beer.name} by ${beer.brewery}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <span className="font-semibold text-gray-900">{beer.name}</span>
                        {' '}by {beer.brewery}
                        {beer.style && <span className="text-gray-500"> • {beer.style}</span>}
                      </div>
                      <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                        {beer.untappdScore && (
                          <span className="text-xs text-gray-500">
                            Untappd: <span className="font-medium text-gray-700">{beer.untappdScore.toFixed(1)}</span>
                          </span>
                        )}
                        {beer.myScore && (
                          <span className="text-xs text-gray-500">
                            My Score: <span className="font-medium text-primary-600">{beer.myScore.toFixed(1)}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    {beer.notes && (
                      <p className="text-sm text-gray-700 mt-1">
                        {beer.notes}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

