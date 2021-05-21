package com.example.chattutorial;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;

import com.getstream.sdk.chat.ChatUI;
import com.getstream.sdk.chat.view.channels.ChannelsView;
import com.getstream.sdk.chat.viewmodel.channels.ChannelsViewModel;
import com.getstream.sdk.chat.viewmodel.channels.ChannelsViewModelBinding;
import com.getstream.sdk.chat.viewmodel.factory.ChannelsViewModelFactory;

import org.jetbrains.annotations.Nullable;

import io.getstream.chat.android.client.ChatClient;
import io.getstream.chat.android.client.models.Filters;
import io.getstream.chat.android.client.models.User;
import io.getstream.chat.android.client.utils.FilterObject;
import io.getstream.chat.android.livedata.ChatDomain;
import kotlin.Unit;

import static java.util.Collections.singletonList;

public final class MainActivity extends AppCompatActivity {

    protected void onCreate(@Nullable Bundle savedInstanceState) {
        getSupportActionBar().setTitle("PocketConfidant AI - Chat");
        getSupportActionBar().setBackgroundDrawable(new ColorDrawable(Color.parseColor("#20b6b6")));
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        String[] titleContent = new String[10];
        Double[] priceContent = new Double[10];
        String[] abstractContent = new String[10];

        //Array initialization and population
        for (int i = 0; i < titleContent.length; i ++ )
        {
            titleContent[i] = "Title " + i;
            priceContent[i] = 0.0;
            abstractContent[i] = "This is the Abstract of Title " + i + " and it is a very long Abstract. ";
            abstractContent[i] += "This is the Abstract of Title " + i + " and it is a very long Abstract. ";
            abstractContent[i] += "This is the Abstract of Title " + i + " and it is a very long Abstract. ";
            abstractContent[i] += "This is the Abstract of Title " + i + " and it is a very long Abstract. ";
            abstractContent[i] += "This is the Abstract of Title " + i + " and it is a very long Abstract. ";
            abstractContent[i] += "This is the Abstract of Title " + i + " and it is a very long Abstract. ";
        }

        saveStringArray(titleContent, "titleContent");
        saveDoubleArray(priceContent, "priceContent");
        saveStringArray(abstractContent, "abstractContent");

        // Step 1 - Set up the client for API calls, the domain for offline storage and the UI components
        ChatClient client = new ChatClient.Builder("b67pax5b2wdq", getApplicationContext()).build();
        ChatDomain domain = new ChatDomain.Builder(client, getApplicationContext()).build();
        new ChatUI.Builder(client, domain, getApplicationContext()).build();

        // Step 2 - Authenticate and connect the user
        User user = new User();
        user.setId("summer-brook-2");
        user.getExtraData().put("name", "Paranoid Android");
        user.getExtraData().put("image", "https://bit.ly/2TIt8NR");

        client.setUser(
                user,
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3VtbWVyLWJyb29rLTIifQ.CzyOx8kgrc61qVbzWvhV1WD3KPEo5ZFZH-326hIdKz0",
                null
        );

        // Step 3 - Set the channel list filter and order
        // This can be read as requiring only channels whose "type" is "messaging" AND
        // whose "members" include our "user.id"
        FilterObject filter = Filters.and(
                Filters.eq("type", "messaging"),
                Filters.in("members", singletonList(user.getId()))
        );
        ChannelsViewModelFactory factory = new ChannelsViewModelFactory(
                filter,
                ChannelsViewModel.DEFAULT_SORT
        );
        ChannelsViewModel channelsViewModel = new ViewModelProvider(this, factory).get(ChannelsViewModel.class);

        // Step 4 - Connect the ChannelsViewModel to the ChannelsView, loose coupling makes it easy to customize
        ChannelsView channelsView = findViewById(R.id.channelsView);
        ChannelsViewModelBinding.bind(channelsViewModel, channelsView, this);
        channelsView.setOnChannelClickListener((channel -> {
            // TODO: Start Channel activity
            startActivity(ChannelActivity.newIntent(this, channel));
            return Unit.INSTANCE;
        }));
    }

    public void saveStringArray(String[] array, String arrayName) {
        SharedPreferences sharedPrefs = getSharedPreferences("myKey", MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPrefs.edit();
        editor.putInt(arrayName +"_size", array.length);
        for(int i=0 ; i < array.length ; i++){
            editor.putString(arrayName + "_" + i, array[i]);
        }
        editor.apply();
    }

    public void saveDoubleArray(Double[] array, String arrayName) {
        SharedPreferences sharedPrefs = getSharedPreferences("myKey", MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPrefs.edit();
        editor.putInt(arrayName +"_size", array.length);
        double temp;
        for(int i=0 ; i < array.length ; i++){
            temp = array[i];
            editor.putFloat(arrayName + "_" + i, (float)temp);
        }
        editor.apply();
    }

    public void ContentTap(View view) {
        Intent intent = new Intent(this, ChannelContent.class);
        startActivity(intent);
    }

    public void ProfileTap(View view) {
        Intent intent = new Intent(this, ChannelProfile.class);
        startActivity(intent);
    }

}