import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Instagram, Twitter, Youtube, ChevronDown, ChevronUp, Users} from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'

export default function Step3Socials() {
  const [showManual, setShowManual] = useState(false)// Estado para mostrar/ocultar la sección de verificación manual
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    instagram: '',
    twitter: '',
    youtube: '',
    followers: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save data to state/context
    navigate('/onboarding/summary')
  }

  return (

    <div className="min-h-screen w-full flex items-center space-y-6 relative z-40 justify-center p-12 bg-slate-950 relative overflow-hidden">
      

      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      

      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>


      <div className="w-full max-w-md space-y-6 relative z-20">


        <div className="flex items-center justify-center gap-2"></div>

      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-primary-600 rounded" />
        <div className="w-8 h-1 bg-primary-600 rounded" />
      </div>

      <Card className="bg-[#0f172a] border-slate-800 shadow-2xl p-6">
        <h1 className="text-xl font-bold text-white mb-2">
          Connect your socials
        </h1>
        <p className="text-slate-400 mb-6 text-sm">
          Step 3 of 3 - Optional
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Button 
              type="button" 
              className="w-full bg-[#E1306C] hover:bg-[#C13584] text-white h-12 transition-all hover:scale-[1.02]"
              onClick={() => alert("Simulación: Abriendo OAuth de Instagram...")}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Connect Instagram Automatically
            </Button>
          </div>
          
          <div className="relative py-4"> 
            <div className="absolute inset-0 flex items-center">
              {/* Línea divisoria oscura */}
              <span className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              {/* Fondo del texto igual al de la tarjeta */}
              <span className="bg-[#0f172a] px-3 text-slate-500 font-medium">Or verify manually</span>
            </div>
          </div>

          <div className="border border-slate-700 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setShowManual(!showManual)}
              className="w-full flex items-center justify-between p-4 bg-[#1e293b] hover:bg-slate-800 transition-colors"
            >
              <span className="font-medium text-slate-200 text-sm">
                Manual Verification
              </span>

              {showManual ? (
                <ChevronUp className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              )}
            </button>
            
            {showManual && (
              <div className="p-4 space-y-3 bg-[#0f172a]">
                
                <div className='space-y-2'>
                  <label className="text-xs font-medium text-slate-400">Instagram Username</label>
                  <div className='relative'>
                    <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <Input
                      placeholder='@username'
                      className='pl-10 bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500'
                      value={formData.instagram}
                      onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className="text-xs font-medium text-slate-400">Instagram followers</label>
                  <div className='relative'>
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <Input
                      placeholder='@followers'
                      className='pl-10 bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500'
                      value={formData.followers}
                      onChange={(e) => setFormData({ ...formData, followers: e.target.value })}
                    />
                  </div>
                </div>

                <div className="text-xs text-blue-300 bg-blue-900/20 border border-blue-800 p-3 rounded-md flex gap-2 items-center justify-center">
                  <span>Manual verification takes up to 24h.</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/onboarding/niche')}
              className="flex-1 bg-transparent border-white text-white hover:bg-slate-800 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button type="submit" className="flex-1">
              Finish
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Card>

    </div>
    </div>


  )
}
