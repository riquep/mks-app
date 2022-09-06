import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Message } from 'primeng/api';
import { from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private supabaseUrl: string = environment.supabaseUrl;
  private supabaseKey: string = environment.supabaseKey;
  private supabase!: SupabaseClient;
  
  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }
  
  getMessages(): Observable<any[]>{
    const select = 'id, date, service, preacher(id, name), file_url';
    const query = this.supabase.from('messages').select(select);
    
    return from(query).pipe(
      map(res => res['body'] as Message[])
    )
  }
}
