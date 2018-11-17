import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {
  Audio,
  Box,
  Column,
  Dictionary,
  Grid,
  Img,
  MastheadTitle,
  MastheadSubtitle,
  PlayButton,
  RememberSection,
  Spacer,
  Subtitle,
  Text,
  Section,
  Wrapper
} from '../../components'

import {Info, Masthead} from './components'
import PlayImg from '../../assets/images/play.svg'

// audio
import cdnUrl from '../../../src/config/secrets.js'
const cdn = cdnUrl.cdn

import vocab from '../../../src/data/french/level1/vocab.js'
import sharedPhrases from '../../../src/data/shared/phrases.js'

//alphabet - consonants
const b = cdn + vocab.category.alphabet.consonants.b.french.audioUrl
const c = cdn + vocab.category.alphabet.consonants.c.french.audioUrl
const d = cdn + vocab.category.alphabet.consonants.d.french.audioUrl
const f = cdn + vocab.category.alphabet.consonants.f.french.audioUrl
const g = cdn + vocab.category.alphabet.consonants.g.french.audioUrl
const h = cdn + vocab.category.alphabet.consonants.h.french.audioUrl
const j = cdn + vocab.category.alphabet.consonants.j.french.audioUrl
const k = cdn + vocab.category.alphabet.consonants.k.french.audioUrl
const l = cdn + vocab.category.alphabet.consonants.l.french.audioUrl
const m = cdn + vocab.category.alphabet.consonants.m.french.audioUrl
const n = cdn + vocab.category.alphabet.consonants.n.french.audioUrl
const p = cdn + vocab.category.alphabet.consonants.p.french.audioUrl
const q = cdn + vocab.category.alphabet.consonants.q.french.audioUrl
const r = cdn + vocab.category.alphabet.consonants.r.french.audioUrl
const s = cdn + vocab.category.alphabet.consonants.s.french.audioUrl
const t = cdn + vocab.category.alphabet.consonants.t.french.audioUrl
const v = cdn + vocab.category.alphabet.consonants.v.french.audioUrl
const w = cdn + vocab.category.alphabet.consonants.w.french.audioUrl
const x = cdn + vocab.category.alphabet.consonants.x.french.audioUrl
const y = cdn + vocab.category.alphabet.consonants.y.french.audioUrl
const z = cdn + vocab.category.alphabet.consonants.z.french.audioUrl

// vowels
const a = cdn + vocab.category.alphabet.vowels.a.french.audioUrl
const e = cdn + vocab.category.alphabet.vowels.e.french.audioUrl
const i = cdn + vocab.category.alphabet.vowels.i.french.audioUrl
const o = cdn + vocab.category.alphabet.vowels.o.french.audioUrl
const u = cdn + vocab.category.alphabet.vowels.u.french.audioUrl

// phrases
const hello = cdn + sharedPhrases.greetings.hello.french.informal.audioUrl
const bye = cdn + sharedPhrases.greetings.bye.french.informal.audioUrl

class FrenchLevel1 extends Component {
  onClick(e) {
    e.preventDefault()
    document.getElementById(e.target.name).play()
  }
  render() {
    return (
      <Wrapper>
        <Masthead
          title="Level One - French"
          subtitle="Learn the French alphabet"
        />
        <Info
          subtitle="Alphabet"
          info="French consists of 24 consonants and 5 vowels. We have also included some other common letters that you need to learn for future lessons."
        />
        <Section alignitems="flex-start" maxwidth="1024px">
          <Dictionary
            gridheader="1fr 2fr 1fr"
            gridheader640="1fr 2fr 1fr"
            gridbody="1fr 2fr 1fr"
            gridbody640="0.5fr 1.1fr 0.5fr"
            height="600px"
            term="Consonants"
            definition="Pronunciation"
            media="Play"
            overflowy="scroll">
            <Box>
              <p>b</p>
            </Box>
            <Box alignitems="flex-start">
              <p>b as in <span style={{color: 'red'}}>b</span>ed</p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="b" src={`${b}`} />
              <PlayButton
                name="b"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>c</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                c as in <span style={{color: 'red'}}>c</span>esar and c as in c<span style={{color: 'red'}}>at</span>
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="c" src={`${c}`} />
              <PlayButton
                name="c"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>d</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                d as in <span style={{color: 'red'}}>d</span>ear
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="d" src={`${d}`} />
              <PlayButton
                name="d"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>g</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                g as in <span style={{color: 'red'}}>g</span>ator or h as in{' '}
                <span style={{color: 'red'}}>h</span>air
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="g" src={`${g}`} />
              <PlayButton
                name="g"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>h</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                You do not pronounce this letter
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="h" src={`${h}`} />
              <PlayButton
                name="h"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>j</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                h as in <span style={{color: 'red'}}>h</span>air{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="j" src={`${j}`} />
              <PlayButton
                name="j"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>k</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                k as in <span style={{color: 'red'}}>k</span>ite{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="k" src={`${k}`} />
              <PlayButton
                name="k"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>l</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                l as in <span style={{color: 'red'}}>l</span>ady{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="l" src={`${l}`} />
              <PlayButton
                name="l"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>m</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                m as in <span style={{color: 'red'}}>m</span>an{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="m" src={`${m}`} />
              <PlayButton
                name="m"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>n</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                n as in <span style={{color: 'red'}}>n</span>ame{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="n" src={`${n}`} />
              <PlayButton
                name="n"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>p</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                p as in <span style={{color: 'red'}}>p</span>ower{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="p" src={`${p}`} />
              <PlayButton
                name="p"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>q</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                k as in <span style={{color: 'red'}}>k</span>id{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="q" src={`${q}`} />
              <PlayButton
                name="q"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>r</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                r as in <span style={{color: 'red'}}>r</span>ed{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="r" src={`${r}`} />
              <PlayButton
                name="r"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>s</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                s as in <span style={{color: 'red'}}>s</span>ed{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="s" src={`${s}`} />
              <PlayButton
                name="s"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>t</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                t as in <span style={{color: 'red'}}>t</span>alk{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="t" src={`${t}`} />
              <PlayButton
                name="t"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>v</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                b as in <span style={{color: 'red'}}>b</span>ed{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="v" src={`${v}`} />
              <PlayButton
                name="v"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>w</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                w as in <span style={{color: 'red'}}>w</span>ord{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="w" src={`${w}`} />
              <PlayButton
                name="w"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>x</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                h as in <span style={{color: 'red'}}>h</span>ello{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="x" src={`${x}`} />
              <PlayButton
                name="x"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>y</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                y as in <span style={{color: 'red'}}>y</span>ellow{' '}
                e as in <span style={{color: 'red'}}>e</span>at{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="y" src={`${y}`} />
              <PlayButton
                name="y"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>z</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                s as in <span style={{color: 'red'}}>s</span>un{' '}
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="z" src={`${z}`} />
              <PlayButton
                name="z"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
          </Dictionary>
        </Section>
        <Section alignitems="flex-start" margin="100px 0 0 0" maxwidth="1024px">
          <Dictionary
            gridheader="1fr 2fr 1fr"
            gridheader640="1fr 2fr 1fr"
            gridbody="1fr 2fr 1fr"
            gridbody640="1fr 2fr 1fr"
            term="Vowels"
            definition="Pronunciation"
            media="Play">
            <Box>
              <p>a</p>
            </Box>
            <Box alignitems="flex-start">
              <p>a as in b<span style={{color: 'red'}}>a</span>nana</p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="a" src={`${a}`} />
              <PlayButton
                name="a"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>e</p>
            </Box>
            <Box alignitems="flex-start">
              <p>e as in b<span style={{color: 'red'}}>e</span>d</p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="e" src={`${e}`} />
              <PlayButton
                name="e"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>i</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                e as in f<span style={{color: 'red'}}>e</span>ed
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="i" src={`${i}`} />
              <PlayButton
                name="i"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>o</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                o as in <span style={{color: 'red'}}>o</span>ver
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="o" src={`${o}`} />
              <PlayButton
                name="o"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>u</p>
            </Box>
            <Box alignitems="flex-start">
              <p>
                u as in l<span style={{color: 'red'}}>u</span>be
              </p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="u" src={`${u}`} />
              <PlayButton
                name="u"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
          </Dictionary>
        </Section>
        <Section
          alignitems="flex-start"
          height="350px"
          margin="100px 0 0 0"
          maxwidth="1024px">
          <Dictionary
            gridheader="1fr 2fr 1fr"
            gridheader640="1fr 2fr 1fr"
            gridbody="1fr 2fr 1fr"
            gridbody640="1fr 2fr 1fr"
            term="Greetings"
            definition="Pronunciation"
            media="Play">
            <Box>
              <p>hola</p>
            </Box>
            <Box alignitems="flex-start">
              <p>Hello</p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="hello" src={`${hello}`} />
              <PlayButton
                name="hello"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
            <Box>
              <p>adiós{}</p>
            </Box>
            <Box alignitems="flex-start">
              <p>Bye</p>
            </Box>
            <Box alignitems="flex-start">
              <audio id="bye" src={`${bye}`} />
              <PlayButton
                name="bye"
                onClick={this.onClick}
                padding="0"
                src={`${PlayImg}`}
              />
            </Box>
          </Dictionary>
        </Section>
        <RememberSection list={['pending stuff', 'pending more stuff']} />
        <Section background="green" height="600px" maxwidth="1024px">
          <Box>
            <Text fontsize="3rem" fontweight="900" color="white">
              Go Practice!{' '}
            </Text>
            <Text color="white" padding="20px">
              <a>Channel Selection & Room Etiquette</a>
            </Text>
          </Box>
        </Section>
      </Wrapper>
    )
  }
}

export default FrenchLevel1