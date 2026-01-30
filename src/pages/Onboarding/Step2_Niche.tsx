import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { cn } from '@/lib/utils'

const NICHES = [
  { id: 'tech', label: 'Technology' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'fitness', label: 'Fitness' },
  { id: 'food', label: 'Food & Cooking' },
  { id: 'travel', label: 'Travel' },
  { id: 'business', label: 'Business' },
]

export default function Step2Niche() {
  
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string[]>([])

  const toggleNiche = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save data to state/context
    navigate('/onboarding/socials')
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-12 bg-slate-950 relative overflow-hidden">
      
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>

      <div className="w-full max-w-md space-y-6 relative z-10">
        
        <div className="flex items-center justify-center gap-2"></div>

      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-gray-200 rounded" />
      </div>

      <Card className="bg-[#0f172a] border-slate-800 shadow-2xl p-6">
        <h1 className="text-xl font-bold text-white mb-2">
          Select your niche
        </h1>
        <p className="text-white mb-6 text-sm">
          Step 2 of 3 - Choose one or more
        </p>
        <span className={cn(
          "text-xs font-medium px-2 py-1 rounded-full transition-colors",
          selected.length > 0 
            ? "bg-primary-100 text-primary-700" 
            : "bg-gray-100 text-gray-500"
          )}>
      {selected.length} selected
    </span>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            
            {NICHES.map((niche) => (
              <button
                key={niche.id}
                type="button"
                onClick={() => toggleNiche(niche.id)}
                className={cn(
                  'relative h-20 rounded-2xl transition-all duration-300 flex items-center justify-center font-medium text-sm',
                  selected.includes(niche.id)
                    ? 'bg-[#FF2E63] text-white shadow-[0_0_20px_rgba(255,46,99,0.3)] scale-105 z-10 border-none'
                    : 'bg-[#1e293b] text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                )}
              >
                {niche.label}
              </button>
            ))}
          
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/onboarding/bio')}
              className="flex-1 bg-transparent border-white text-white hover:bg-slate-800 hover:text-white"
            >
              <ArrowLeft className=" mr-2 h-4 w-4" />
              Back
            </Button>
            
            <Button type="submit" className="flex-1">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Card>

      </div>
    </div>

  )
}
