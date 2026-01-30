import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'

export default function Step1Bio() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    bio: '',
    country: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save data to state/context
    if (!formData.name || !formData.lastname || !formData.country) {
      alert('Please fill in all fields.')
      return
    }
    navigate('/onboarding/niche')
  }

return (
    <div className="min-h-screen w-full flex items-center justify-center p-12 bg-slate-950 relative overflow-hidden">
      
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>


      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>

      <div className="w-full max-w-md space-y-6 relative z-10">

        <div className="flex items-center justify-center gap-2"></div>

      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-gray-200 rounded" />
        <div className="w-8 h-1 bg-gray-200 rounded" />
      </div>

      <Card className="bg-[#0f172a] border-slate-800 shadow-2xl p-6">
        <h1 className="text-xl font-bold text-white mb-2">
          Tell us about yourself
        </h1>
        <p className="text-slate-400 mb-6 text-sm">
          Step 1 of 3
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="name"
            label="Your Name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500"
          />

          <Input
            id="last-name"
            label="Your last Name"
            placeholder="Villasana Ajuria"
            value={formData.lastname}
            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
            className="bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500"
          />
          <Input
            id="Country"
            label="Your Country"
            placeholder="Mexico"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500"
          />

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              Short Bio
            </label>
            <textarea
              id="bio"
              rows={3}
              className="w-full px-4 py-2 bg-[#1e293b] border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder:text-slate-500 resize-none"
              placeholder="opcional"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
          </div>

          <div className="flex gap-3 pt-4">

            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/')}
              className="flex-1 bg-transparent border-white text-white hover:bg-slate-800 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            

            <Button 
              type="submit" 
              className="flex-1 bg-[#FF2E63] hover:bg-[#d41b4a] text-white border-none shadow-[0_0_15px_rgba(255,46,99,0.4)] transition-all hover:scale-[1.02]"
            >
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
