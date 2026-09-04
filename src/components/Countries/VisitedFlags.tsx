export interface VisitedFlagsProps {
    flags: string[]; 
}

export default function VisitedFlags({ flags }: VisitedFlagsProps) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <span>🚩</span> Selected Flags
                </h3>
                <span className="bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full border border-blue-100">
                    {flags.length} {flags.length === 1 ? 'Flag' : 'Flags'}
                </span>
            </div>

            {flags.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                    {flags.map((flag, index) => (
                        <div
                            key={index}
                            className="relative group w-16 h-10 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50"
                        >
                            <img 
                                src={flag} 
                                alt="Country flag" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-400 italic">
                    No flags added yet. Click "Add Flag" on a card to display it here!
                </p>
            )}
        </div>
    );
}